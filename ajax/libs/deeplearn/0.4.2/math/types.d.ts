import { DataType } from './ndarray';
export interface SumTypes {
    float32: 'float32';
    int32: 'int32';
    bool: 'int32';
}
export declare enum SumTypesMap {
    float32 = "float32",
    int32 = "int32",
    bool = "int32",
}
export interface UpcastInt32And {
    float32: 'float32';
    int32: 'int32';
    bool: 'int32';
}
export declare enum UpcastInt32AndMap {
    float32 = "float32",
    int32 = "int32",
    bool = "int32",
}
export interface UpcastBoolAnd {
    float32: 'float32';
    int32: 'int32';
    bool: 'bool';
}
export declare enum UpcastBoolAndMap {
    float32 = "float32",
    int32 = "int32",
    bool = "bool",
}
export interface UpcastFloat32And {
    float32: 'float32';
    int32: 'float32';
    bool: 'float32';
}
export declare enum UpcastFloat32AndMap {
    float32 = "float32",
    int32 = "float32",
    bool = "float32",
}
export interface UpcastType {
    float32: UpcastFloat32And;
    int32: UpcastInt32And;
    bool: UpcastBoolAnd;
}
export declare function upcastType(typeA: DataType, typeB: DataType): DataType;
