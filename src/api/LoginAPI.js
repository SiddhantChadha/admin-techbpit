const login = async (email, password) => {
  const res = await fetch(
    "https://techbpit-tjhkw.run-ap-south1.goorm.site/auth/login",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    }
  );

  const data = await res.json();
  return data;
};
export default login;
