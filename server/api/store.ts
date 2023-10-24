export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  query.name;

  // cur_live_E5zjxPgl1YGborKu4dW0VoJLKkCevxTP1FSmdcL7
  const data = await $fetch(
    'https://api.currencyapi.com/v3/latest?apikey=cur_live_E5zjxPgl1YGborKu4dW0VoJLKkCevxTP1FSmdcL7&currencies=EUR%2CUSD%2CCAD'
  );

  return data;
});
