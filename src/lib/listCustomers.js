// // Get an instance of the Square API you want call
// const { customersApi }  = client
// const listCustomers = async () => {
//   try {
//     // Returns and API response object. API call value is on the result property
//     let { result } = await customersApi.listCustomers()
//     console.log(result)
//   } catch (error) {
//     if (error instanceof ApiError) {
//       console.log(error.errors)
//     } else {
//       console.log("Unexpected Error: ", error)
//     }
//   }
// }
// // listCustomers()