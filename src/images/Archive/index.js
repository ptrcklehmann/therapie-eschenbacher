import { prepareData, renderData } from './solution'

const filterParams = {
  launch_year: 2018,
  customer: 'NASA',
}

// example of run, you could leave it or modify however you want
fetch(`https://api.spacexdata.com/v3/launches/past`)
  .then(response => response.json())
  .then(res => {
    // console.log("logging")
    console.log(res.length);
    const JSONString = JSON.stringify(res)
    localStorage.setItem('launches', JSONString)
    const customerFilter = prepareData(filterParams.launch_year, filterParams.customer)
    console.log(customerFilter.length);
    return customerFilter
  })
  .then(customerFilter => {
    console.log(customerFilter);
    renderData(customerFilter)})

