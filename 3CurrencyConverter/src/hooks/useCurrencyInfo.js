import{useEffect, useState} from 'react' 
function useCurrencyInfo(currency){
    const [data, setData] = useState({})//empty object so that program donot crash when we recieve empty input // created to store the object recieved from the (res)
        //API calling can be done through "fetch" instruction
        // Hook which invoke when component is mount over the dom  --> useEffect
        useEffect(()=>{
            //generaly the value we extract from API calling is in String formate, hence we need to handle and convert it to JSON formate

            fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
            //chaining in fetch using then
            .then((res)=>res.json())//no {} since one line statement
            .then((res) => setData(res[currency]));//accessing the object from the res json we can also use "dot" property
    },[currency])
    
    
    return data; // Not understood;
}
export default useCurrencyInfo; 