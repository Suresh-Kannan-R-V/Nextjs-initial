export const camalize = (str: string): string => {
  return str.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());
};

export const makeid = (): string => {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  for (let i = 0; i < 5; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

export const routeTo = (store: any, path: string, routeAfter = 1000) =>
  setTimeout(() => {
    store.setState({ route: path });
  }, routeAfter);

export const parseJwt = (token: string) => {
  try {
    return JSON.parse(atob(token.split('.')[1]));
  } catch (e) {
    return null;
  }
};

// params query
export function objectToQueryString(obj: any) {
  const keyValuePairs = [];
  for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
      const encodedKey = encodeURIComponent(key);
      const encodedValue = encodeURIComponent(obj[key]);
      keyValuePairs.push(`${encodedKey}=${encodedValue}`);
    }
  }
  return keyValuePairs.join('&');
}

// params query
export function getTableCellLength(data: any) {
  const longestValues: any = {};

  data?.forEach((item: any) => {
    Object.keys(item).forEach((key: any) => {
      const currentValue = item[key]?.toString();
      if (!longestValues[key] || currentValue?.length > longestValues[key]?.length) {
        longestValues[key] =
          currentValue?.length < 40
            ? 400
            : currentValue?.length > 40 && currentValue?.length < 80
              ? 550
              : currentValue?.length * 10;
      }
    });
  });
  return longestValues;
}

// Function to validate email format
export const validateEmail = (email: string) => {
  const emailReg =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return emailReg.test(email);
};
// Function to validate url format

export const validateDomainURL = (url: string) => {
  const domainReg = /^(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$/;
  return domainReg?.test(url);
};

// Function to validate password format
export const validatePassword = (password: string) => {
  return (
    password.length >= 8 && // Password must be at least 8 characters long
    /[A-Z]/.test(password) && // Password must contain at least one uppercase letter
    /[a-z]/.test(password) && // Password must contain at least one lowercase letter
    /\d/.test(password) && // Password must contain at least one number
    /[^a-zA-Z0-9]/.test(password) // Password must contain at least one special character
  );
};

export const currency = 'Rs. ';

export const formatINR = (amount: number, showSymbol?: boolean) => {
  const shouldShowSymbol = showSymbol ?? true;
  return (
    (shouldShowSymbol ? 'Rs. ' : '') +
    amount?.toLocaleString('en-IN', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })
  );
};

export const formatNumber = (value: number): string => {
  if (value >= 10000000) {
    return (value / 10000000)?.toFixed(2) + 'Cr'; // Show in crores with 2 decimals
  } else if (value >= 100000) {
    return (value / 100000)?.toFixed(2) + 'L'; // Show in lakhs with 2 decimals
  } else if (value >= 1000) {
    return (value / 1000)?.toFixed(2) + 'k'; // Show in thousands with 2 decimals
  }
  return value?.toString(); // Return the number with 2 decimals if less than 1000
};

interface RazorpayOptions {
  orderAmount: number;
  name: string;
  description: string;
  preFillName: string;
  preFillEmail: string;
  preFillContactNumber: string;
  notesAddress?: string;
  theme?: string;
  setLoading: (loading: boolean) => void;
  baseURL: string;
  meta: Record<string, any>;
  headers?: Record<string, string>;
  config?: Record<string, any>;
  ondismiss?: () => void;
  callBackResponse?: (response: any) => void;
  errHandler?: (error: any) => void;
  is_error_track?: boolean;
}

const razorpayCall = async ({
  orderAmount,
  name,
  description,
  preFillName,
  preFillEmail,
  preFillContactNumber,
  notesAddress,
  theme = '#80c0f0',
  setLoading,
  baseURL,
  meta,
  headers = {},
  config,
  ondismiss = () => {},
  callBackResponse = () => {},
  errHandler = () => {},
  is_error_track = false,
}: RazorpayOptions): Promise<void> => {
  const script = document.createElement('script');
  script.src = 'https://checkout.razorpay.com/v1/checkout.js';

  script.onerror = () => {
    alert('Razorpay SDK failed to load. Please check your internet connection!');
  };
  script.onload = async () => {
    try {
      // setLoading(true);

      const result = await fetch(`${baseURL}payment/createOrder`, {
        method: 'POST',
        headers: {
          ...headers,
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: orderAmount,
          meta,
        }),
        cache: 'default',
      }).then((res) => res.json());

      const { amount, id, currency } = result?.data?.data;
      const key = meta.razor_pay_key || '';

      const options: any = {
        key: key,
        amount: amount,
        currency: currency,
        name: name,
        description: description,
        order_id: id,
        handler: async function (response: any) {
          setLoading(true);
          const paymentResult = await fetch(`${baseURL}payment/payOrder`, {
            method: 'POST',
            headers: {
              ...headers,
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              amount: amount,
              razorpayPaymentId: response.razorpay_payment_id,
              razorpayOrderId: response.razorpay_order_id,
              razorpaySignature: response.razorpay_signature,
              meta,
            }),
            cache: 'default',
          }).then((res) => res.json());

          callBackResponse(paymentResult);
          setLoading(false);
        },
        prefill: {
          name: preFillName,
          email: preFillEmail,
          contact: preFillContactNumber,
        },
        notes: {
          address: notesAddress,
        },
        theme: {
          color: theme,
        },
          config: {
    display: {
      blocks: {
        upi: {
          name: "UPI",
          instruments: [
            { method: "upi", flows: ["collect"] }, // Allow only UPI ID flow
          ],
        },
      },
      sequence: ["upi", "card", "netbanking", "wallet"], // Control the order of payment methods
      preferences: {
        show_default_blocks: false, // Disable default blocks (e.g., QR on initial load)
      },
    },
  },
        modal: {
          ondismiss: () => {
            ondismiss();
          },
        },
      };

      // setLoading(false);
      const paymentObject = new (window as any).Razorpay(options);
      paymentObject.on('payment.failed', async function (response: any) {
        if (is_error_track) {
          await fetch(`${baseURL}payment/payOrder`, {
            method: 'POST',
            headers: {
              ...headers,
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              amount: amount,
              razorpayOrderId: id,
              meta,
              is_error: true,
              error: response.error,
            }),
            cache: 'default',
          }).then((res) => res.json());
          setLoading(false);
        } else {
          errHandler({
            error: response.error,
            meta,
          });
          setLoading(false);
        }
      });

      paymentObject.open();
    } catch (error) {
      alert(error);
      // setLoading(false);
    }
  };

  document.body.appendChild(script);
};

export default razorpayCall;

export function formatCommaNumber(number: number | string): string {
  return number.toLocaleString(); // Converts to '1,000', '2,295', etc.
}
