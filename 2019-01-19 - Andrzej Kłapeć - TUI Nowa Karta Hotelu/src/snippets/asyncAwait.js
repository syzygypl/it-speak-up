const getDatesWithPricesHintItems = currency => dispatch =>
  new Promise(async (resolve, reject) => {
    try {
      const data = await dispatch(fetchDatesWithPrices());
      const hintItems = data.map(({ date, price }) => {
        const formattedDate = formatApiResponseDate(date);

        return {
          type: DropdownTypes.travelDate,
          value: date,
          label: formattedDate,
          price: `${price} ${currency}`,
          fieldValue: formattedDate,
          wide: true,
        };
      });

      resolve(hintItems);
    } catch (error) {
      reject(error);
    }
  });
