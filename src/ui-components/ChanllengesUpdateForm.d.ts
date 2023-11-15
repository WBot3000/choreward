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
export declare type ChanllengesUpdateFormInputValues = {
    ChallengeList?: string;
    Family1Name?: string;
    Family2Name?: string;
    EndTime?: string;
    RwardPoints?: number;
};
export declare type ChanllengesUpdateFormValidationValues = {
    ChallengeList?: ValidationFunction<string>;
    Family1Name?: ValidationFunction<string>;
    Family2Name?: ValidationFunction<string>;
    EndTime?: ValidationFunction<string>;
    RwardPoints?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ChanllengesUpdateFormOverridesProps = {
    ChanllengesUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    ChallengeList?: PrimitiveOverrideProps<TextFieldProps>;
    Family1Name?: PrimitiveOverrideProps<TextFieldProps>;
    Family2Name?: PrimitiveOverrideProps<TextFieldProps>;
    EndTime?: PrimitiveOverrideProps<TextFieldProps>;
    RwardPoints?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ChanllengesUpdateFormProps = React.PropsWithChildren<{
    overrides?: ChanllengesUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    chanllenges?: any;
    onSubmit?: (fields: ChanllengesUpdateFormInputValues) => ChanllengesUpdateFormInputValues;
    onSuccess?: (fields: ChanllengesUpdateFormInputValues) => void;
    onError?: (fields: ChanllengesUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ChanllengesUpdateFormInputValues) => ChanllengesUpdateFormInputValues;
    onValidate?: ChanllengesUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ChanllengesUpdateForm(props: ChanllengesUpdateFormProps): React.ReactElement;
