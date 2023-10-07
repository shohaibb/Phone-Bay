const currency_formatter = new Intl.NumberFormat(undefined,{
    currency: "USD",
    style: "currency", 
})

export function formatCurrency(number: number){
return currency_formatter.format(number)
}