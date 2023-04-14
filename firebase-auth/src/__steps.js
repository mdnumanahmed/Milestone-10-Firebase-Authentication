/**
 * input field এর ডাটা কয়েক ভাবে কালেক্ট করা যায়
 * 1. onChange event এর মাধ্যমে।
 *  -> onChange event সরাসরি input filed এ লিখে তার মধ্যে event handler দেয়া।
 *  -> onChange event প্রতিটি অক্ষর লিখার সাথে সাথে বারবার trigger হবে।
 * 2. onBlur event এর মাধ্যমে।
 *  -> onBlur event সরাসরি input filed এ লিখে তার মধ্যে event handler দেয়া।
 *  -> onBlur event টি input filed এর বাইরে ক্লিক করলে (মানে ফোকাসে না থাকলে) trigger হবে।
 * 3. onSubmit event এর মাধ্যমে।
 *      onSubmit event সরাসরি input filed এ না লিখে form tag এর মধ্যে event handler দেয়া।
 * 
 * ====================================
 * Click Handler এর () প্যারামিটারে event নামে অবজেক্ট পাওয়া যায়। এই event এর target বলতে ঐ html tag কে বুঝায়, যার মধ্যে ক্লিক হয়েছে।
 * আর target যদি input field হয়, তাহলে এর ডাটা পাওয়া যায় value দিয়ে।
 * আর target যদি form হয়, তাহলে target এর পরে input field এর name তারপর value দিতে হবে। 
 * যেমন=  for input field = event.target.value 
 *  for form = event.target.email.value 
 *  for form = event.target.password.value 
 * 
 * ====================================
 * ডাটা ব্যবহারের জন্য প্রতিটি input field এর জন্য state ডিক্লেয়ার করতে হবে।
 *  Click Handler এর মধ্যে ডাটা পাওয়ার পরে state এর মধ্যে সেট করে দিতে হবে।
 * 
 * 
 * form এর ডিফল্ট ধর্ম হচ্ছে সাবমিট করার পর পেইজ রিলোড দিয়ে অন্য পেজে চলে যাওয়া। এটি থামাতে হলে event Handler ফাংশনের মধ্যে প্রথমেই event.preventDefault() ফাংশনটি ব্যবহার করতে হবে।
 * 
 * 
 * **/