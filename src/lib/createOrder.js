// const { ordersApi } = client
// const createOrder = async () => {
//     try {
//         const { result, ...httpResponse } = await ordersApi.createOrder({
//             order: {
//                 locationId: "L34E80SBT85CE",
//                 customerId: "YMWVEZRGKMY3F4GVPTWAGWQX74",
//                 lineItems: [
//                     {
//                         catalogObjectId: "6BBLT5ZXFR73LFQ7AMV46IMO",
//                         quantity: "1"
//                     }
//                 ],
//                 fulfillments: [
//                     {
//                         type: "SHIPMENT",
//                         state: "PROPOSED",
//                         shipmentDetails: {
//                             recipient: {
//                                 customerId: "YMWVEZRGKMY3F4GVPTWAGWQX74",
//                                 displayName: "Emelia Earhart",
//                                 emailAddress: "eh@mail.com",
//                                 address: {
//                                     addressLine1: "house",
//                                     addressLine2: "street",
//                                     addressLine3: "town"
//                                 }
//                             }
//                         }
//                     }
//                 ]
//             },
//             idempotencyKey: uuidv4()
//         });
//         console.log(result)
//         // Get more response info...
//         // const { statusCode, headers } = httpResponse;
//     } catch(error) {
//         console.log(error)
//         if (error instanceof ApiError) {
//             const errors = error.result;
//             console.log(errors)

//           // const { statusCode, headers } = error;
//         }
//     }
// } 
// // createOrder()