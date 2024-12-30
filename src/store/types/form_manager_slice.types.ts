
export enum FormActionType {
    "CREATE", "EDIT" , "DEFAULT"
}

export interface FormManager {
    formState: "open" | "closed",
    formActionType: FormActionType,
}

