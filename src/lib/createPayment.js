// const { paymentsApi } = client
// try {
//     const response = await client.paymentsApi.createPayment({
//         sourceId: 'cnon:CBASELDx9NFLaexB8BEzToifVOE',
//         verificationToken: "verf:CBASEMFvY-k_PqiXcDJHPmy9Bqo",
//         idempotencyKey: uuidv4(),
//         amountMoney: {
//             amount: 320,
//             currency: 'GBP'
//         },
//         orderId: 'wYd4l6BysX7kTW7wEYnVBB4RTg4F',
//         referenceId: '123456',
//         // cashDetails: {
//         //     buyerSuppliedMoney: {
//         //         amount: 320,
//         //         currency: "GBP"
//         //     }
//         // }
//     });

//     console.log(response.result);
// } catch(error) {
//     console.log(error);
// }