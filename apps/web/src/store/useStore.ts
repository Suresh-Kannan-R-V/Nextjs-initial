import type { AppDispatch, RootState } from '@/store';
import { useDispatch, useSelector } from 'react-redux';

type Actions<T> = Record<string, (...args: any[]) => T>;

/**
 * A type-safe custom hook for accessing Redux state and dispatching actions.
 * @param selector - A function to select a part of the state.
 * @param actions - An object mapping action creators to dispatch functions.
 */
export function useStore<T, A extends Actions<any>>(
	selector: (state: RootState) => T,
	actions: A,
): T & { [K in keyof A]: (...args: Parameters<A[K]>) => ReturnType<A[K]> } {
	const dispatch: AppDispatch = useDispatch();
	const state = useSelector(selector);

	// Map actions to dispatch functions
	const boundActions = Object.fromEntries(
		Object.entries(actions).map(([key, action]) => [
			key,
			(...args: any[]) => dispatch(action(...args)),
		]),
	) as { [K in keyof A]: (...args: Parameters<A[K]>) => ReturnType<A[K]> };

	return { ...state, ...boundActions };
}
