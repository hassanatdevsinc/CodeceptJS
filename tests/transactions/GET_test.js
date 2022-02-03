Feature('GET Transactions');

Scenario('Valid ID Transaction', async ({ I }) => {

  const res = await I.sendGetRequest('transactions/49',);
  await I.assertEqual(res.status, 200);
  I.assertEqual(res.data.createdAt,'2021-09-27T12:46:55.275Z');
  I.assertEqual(res.data.description,'payment transaction at Streich - Lowe using card ending with ***0091 for CNY 913.15 in account ***60393897');
  I.assertEqual(res.data.amount,'205.86');
  I.assertEqual(res.data.type,'type 49');
  I.assertEqual(res.data.id,'49');
  console.log(res.data);
});

Scenario('Invalid ID Transaction', async ({ I }) => {
  const res = await I.sendGetRequest('transactions/1000',);
  await I.assertEqual(res.status, 404);
  console.log(res.data);
});
