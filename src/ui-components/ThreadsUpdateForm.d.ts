/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ThreadsUpdateFormInputValues = {
    ThreadTitles?: string;
    ThreadTypes?: string;
    UserID?: string;
    LikedUsers?: string;
    Likes?: number;
    VideoURL?: string;
    Description?: string;
    Comments?: string;
};
export declare type ThreadsUpdateFormValidationValues = {
    ThreadTitles?: ValidationFunction<string>;
    ThreadTypes?: ValidationFunction<string>;
    UserID?: ValidationFunction<string>;
    LikedUsers?: ValidationFunction<string>;
    Likes?: ValidationFunction<number>;
    VideoURL?: ValidationFunction<string>;
    Description?: ValidationFunction<string>;
    Comments?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ThreadsUpdateFormOverridesProps = {
    ThreadsUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    ThreadTitles?: PrimitiveOverrideProps<TextFieldProps>;
    ThreadTypes?: PrimitiveOverrideProps<TextFieldProps>;
    UserID?: PrimitiveOverrideProps<TextFieldProps>;
    LikedUsers?: PrimitiveOverrideProps<TextFieldProps>;
    Likes?: PrimitiveOverrideProps<TextFieldProps>;
    VideoURL?: PrimitiveOverrideProps<TextFieldProps>;
    Description?: PrimitiveOverrideProps<TextFieldProps>;
    Comments?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ThreadsUpdateFormProps = React.PropsWithChildren<{
    overrides?: ThreadsUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    threads?: any;
    onSubmit?: (fields: ThreadsUpdateFormInputValues) => ThreadsUpdateFormInputValues;
    onSuccess?: (fields: ThreadsUpdateFormInputValues) => void;
    onError?: (fields: ThreadsUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ThreadsUpdateFormInputValues) => ThreadsUpdateFormInputValues;
    onValidate?: ThreadsUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ThreadsUpdateForm(props: ThreadsUpdateFormProps): React.ReactElement;
