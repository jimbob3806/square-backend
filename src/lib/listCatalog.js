// try {
//     const { result, ...httpResponse } = await catalogApi.listCatalog(undefined, "ITEM");
//     console.log(result.objects[0].itemData.imageIds)
//     // Get more response info...
//     // const { statusCode, headers } = httpResponse;
//   } catch(error) {
//     if (error instanceof ApiError) {
//       const errors = error.result;
//       // const { statusCode, headers } = error;
//     }
//   }