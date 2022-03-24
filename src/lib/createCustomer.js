// // let idempotencyKey = uuidv4()

// // const createCustomer = async () => {
// //     // To create a customer, you only need 1 of 5 identity values but you'll be
// //     // specifying two.
// //     let requestBody = {
// //       idempotencyKey: idempotencyKey, // A unique id for the request
// //       givenName: "Amelia",
// //       familyName: "Earhart"
// //     }
  
// //     try {
// //       let { result } = await customersApi.createCustomer(requestBody)
// //       console.log(result)
// //     } catch (error) {
// //       if (error instanceof ApiError) {
// //         console.log(error.errors)
// //       } else {
// //         console.log("Unexpected Error: ", error)
// //       }
// //     }
// //   }
// //   createCustomer()