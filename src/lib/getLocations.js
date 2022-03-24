//   // Get an instance of the Square API you want call
// const { locationsApi } = client

// // Create wrapper async function 
// const getLocations = async () => {
//   // The try/catch statement needs to be called from within an asynchronous function
//   try {
//     // Call listLocations method to get all locations in this Square account
//     let listLocationsResponse = await locationsApi.listLocations()

//     // Get first location from list
//     let firstLocation = listLocationsResponse.result.locations[0]

//     console.log("Here is your first location: ", firstLocation)
//   } catch (error) {
//     if (error instanceof ApiError) {
//       console.log("There was an error in your request: ", error.errors)
//     } else {
//       console.log("Unexpected Error: ", error)
//     }
//   }
// }

// // Invokes the async function
// // getLocations()