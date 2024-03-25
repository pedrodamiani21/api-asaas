export const handleRequestError = (error: any, defaultMessage: string = "Erro na solicitação."): string => {
    const errors = error?.response?.data?.errors;
    let errorMessage = defaultMessage;
    
    if (errors && errors.length > 0 && errors[0]?.description) {
      errorMessage = errors[0].description;
    }
    
    return errorMessage;
  };
  