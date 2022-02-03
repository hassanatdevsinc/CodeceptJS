Feature('PUT Transactions');

Scenario('Update Transaction created at', async ({ I }) => {

  const res = await I.sendPutRequest('transactions/53', { "createdAt": "2022-02-22T22:22:22.222Z" });
  await I.assertEqual(res.status, 200);
  I.assertEqual(res.data.createdAt,'2022-02-22T22:22:22.222Z');
  I.assertEqual(res.data.description,'invoice transaction at Yundt - Hegmann using card ending with ***0221 for NAD 985.32 in account ***04689975');
  I.assertEqual(res.data.amount,'758.67');
  I.assertEqual(res.data.type,'type 2');
  I.assertEqual(res.data.id,'53');
  console.log(res.data);
});

Scenario('Update Transaction description', async ({ I }) => {

  const res = await I.sendPutRequest('transactions/59', { "description": "invoice ***0221 account ***04689975" });
  await I.assertEqual(res.status, 200);
  I.assertEqual(res.data.description,'invoice ***0221 account ***04689975');
  I.assertEqual(res.data.amount,'758.67');
  I.assertEqual(res.data.type,'type 2');
  I.assertEqual(res.data.id,'59');
  console.log(res.data);
});

Scenario('Update Transaction amount', async ({ I }) => {

  const res = await I.sendPutRequest('transactions/62', { "amount": "900" });
  await I.assertEqual(res.status, 200);
  I.assertEqual(res.data.createdAt,'2021-09-29T15:55:39.484Z');
  I.assertEqual(res.data.description,'invoice transaction at Yundt - Hegmann using card ending with ***0221 for NAD 985.32 in account ***04689975');
  I.assertEqual(res.data.amount,'900');
  I.assertEqual(res.data.type,'type 2');
  I.assertEqual(res.data.id,'62');
  console.log(res.data);
});

Scenario('Update Transaction type', async ({ I }) => {

  const res = await I.sendPutRequest('transactions/63', { "type": "type 63" });
  await I.assertEqual(res.status, 200);
  I.assertEqual(res.data.createdAt,'2021-09-29T13:05:16.481Z');
  I.assertEqual(res.data.description,'invoice transaction at Yundt - Hegmann using card ending with ***0221 for NAD 985.32 in account ***04689975');
  I.assertEqual(res.data.amount,'758.67');
  I.assertEqual(res.data.type,'type 63');
  I.assertEqual(res.data.id,'63');
  console.log(res.data);
});

