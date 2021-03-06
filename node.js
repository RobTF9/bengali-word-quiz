const words = [
  ['পাশেই', 'Pashei', 'Next-to'],
  ['লাল', 'Laal', 'Red'],
  ['কালো', 'Kalo', 'Black'],
  ['হলুদ', 'Holud', 'Yellow'],
  ['সবুজ', 'Shobuj', 'Green'],
  ['নীল', 'Neel', 'Blue'],
  ['সাদা', 'Shada', 'White'],
  ['প্রিয়', 'Priyo', 'Favourite'],
  ['গরম', 'Gorom', 'Hot'],
  ['ঠান্ডা', 'Thanda', 'Cold'],
  ['রোদ', 'Rodh', 'Sunny'],
  ['বাতাস', 'Batash', 'Windy'],
  ['বৃষ্টি', 'Brishti', 'Raining'],
  ['মেঘলা', 'Meglha', 'Cloudy'],
  ['সেঁতসেঁতে', 'Shetshyate', 'Humid'],
  ['ঘাম', 'Gham', 'Sweaty'],
  ['হইতাছে', 'Portase', 'Falling'],
  ['পড়তাছে', 'Hoitase', 'Happening'],
  ['অল্প', 'Olpo', 'A-little'],
  ['হালকা', 'Halka', 'Light-(weather)'],
  ['রান্না', 'Ranna', 'Cooking'],
  ['পড়াশোনা', 'Porashona', 'Studying'],
  ['ভালো', 'Bhalo', 'Good'],
];

words.forEach((w) => {
  console.log(
    `"lang": "${w[0]}", "pron": "${w[1]}", "tran": "${w[2]}", `,
  );
});
