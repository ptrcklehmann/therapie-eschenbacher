// Please implement your solution in this file

let yearFilter = []
const customerFilter = []

const payloadIncludesCustomer =  (payloads, customerName) => {
   // checks whether an element is even
    const containsName = (customerString) => customerString.split(" ").includes(customerName)
    
    const filtered = payloads.filter(payload => payload.customers.some(containsName))
    if(filtered.length > 0)
        return true
}

export const prepareData = (year, customerName) => {
    const data = JSON.parse(localStorage.getItem('launches'));
    const filtered = data.filter(el => el.launch_year == year)
    const secondFiltered = filtered.filter(el =>  payloadIncludesCustomer(el.rocket.second_stage.payloads, customerName) == true)
    const returnObjs = []
    secondFiltered.forEach((item) => {
        const returnItm = { 
                "flight_number": item.flight_number,
                "mission_name": item.mission_name,
                "payloads_count": item.rocket.second_stage.payloads.length,
        } 
        returnObjs.push(returnItm)
    })
  
    return returnObjs
}

export const renderData = (customerFilter) => {
    document.getElementById('out').innerHTML = JSON.stringify(customerFilter, null, 2)
}