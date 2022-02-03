Feature('POST Transactions');

Scenario('New Transaction Created', async ({ I }) => {

  const res = await I.sendPostRequest('transactions',{ "description": "new created transaction1" });
  await I.assertEqual(res.status, 201);
  I.assertEqual(res.data.description,'new created transaction');
  I.assertEqual(res.data.amount,'100');
  I.assertEqual(res.data.type,'type 1');
  console.log(res.data);
});


