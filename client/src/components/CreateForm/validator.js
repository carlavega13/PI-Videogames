const validator = (
  { name, description, img, released, rating, genres, platforms },
  errors
) => {
  const errors1 = {
    name: "",
    description: "",
    img: "",
    released: "",
    rating: "",
    genres: "",
    platforms: "",
  };
  const expresionRegularSimbolos = /[^a-zA-Z0-9\s]/;
  const expresionRegularLetras = /[a-zA-Z]/;

  //! valido el NAME
  //?valido que el nombre no este vacio
  if (name.trim().length === 0) {
    errors1.name = "A name is required";
  }
  if (
    expresionRegularSimbolos.test(name.trim()) &&
    !expresionRegularLetras.test(name)
  ) {
    errors1.name = "The name cannot be just simbols";
  }
  //? valido que el nombre no sobrepase los 60 caracteres
  if (name.trim().length > 60) {
    errors1.name = "The name must be 60 characters or less";
  }

  //! valido la DESCRIPTION
  //? valido que la descripcion no este vacio
  if (description.trim().length === 0) {
    errors1.description = "The description cannot be empty";
  }

  //! valido la IMAGE
  //? valido que la imagen no este vacia
  if (img.trim().length === 0) {
    errors1.img = "A link is required";
  }

  //! valido la FECHA
  //? que la fecha no este vacia
  if (released.trim().length === 0) {
    errors1.released = "The date cannot be empty";
  }
  //? que la fecha
  if (released.trim().length > 10) {
    errors1.released = "The date cannot be longer than 8 characters";
  }
  if (released.slice(-4) > new Date().getFullYear()) {
    errors1.released = "This year is not valid";
  }
  //! valido el rating
  //? el rating no puede estar vacio
  if (rating.length === 0) {
    errors.rating = "The rating cannot be empty";
  }
  //? el rating no puede ser mas de 5
  if (rating > 5 || rating < 0) {
    errors1.rating = "The rating must be between 0 and 5";
  }

  //!valido los generos
  if (genres.length === 0) {
    errors1.genres = "You must select at least one genre";
  }
  //!valido los platforms
  if (platforms.length === 0) {
    errors1.platforms = "You must select at least one platform";
  }

  return errors1;
};
export default validator;
