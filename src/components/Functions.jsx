import { format } from "date-fns";
import { parseISO } from "date-fns";
import en from "date-fns/locale/en-US";


 export  const dateFormat = (dateValue) => {
    const parsedDate = parseISO(dateValue);
    const formattedDate = format(parsedDate, "d  MMMM  EEE", {
      locale: en,
    });
    return formattedDate;
  };
  
  
  export const formatPrice = (value)=>{
    const price = new Intl.NumberFormat('tr-TR', { style: 'currency', currency: 'TRY' }).format(value)
    return price
  }