const getUser = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    const {
      name: { first, last },
      picture: { large: image },
      email,
      phone,
      login: { password },
      location: {
        street: { name: streetName, number: streetNumber },
      },
      dob: { age },
    } = data.results[0];
    return {
      name: `${first} ${last}`,
      image,
      email,
      phone,
      password,
      street: `${streetNumber} ${streetName}`,
      age,
    };
  };

  export default getUser;