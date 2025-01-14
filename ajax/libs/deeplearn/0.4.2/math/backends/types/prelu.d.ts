import { NamedArrayMap } from '../../../util';
import { NDArray } from '../../ndarray';
import { KernelInputConfig, KernelNode, TapeNodeInputGradientArrays } from '../tape_types';
export interface PReLUNode<T extends NDArray> extends KernelNode {
    inputAndArgs: PReLUInputConfig<T>;
    output: T;
    gradient: (dy: T, y: T) => PReLUGradientInputArrays<T>;
}
export interface PReLUInputConfig<T extends NDArray> extends KernelInputConfig {
    inputs: PReLUInputArrays<T>;
}
export interface PReLUInputArrays<T extends NDArray> extends NamedArrayMap {
    x: T;
    alpha: T;
}
export interface PReLUGradientInputArrays<T extends NDArray> extends TapeNodeInputGradientArrays {
    x: () => T;
    alpha: () => T;
}
