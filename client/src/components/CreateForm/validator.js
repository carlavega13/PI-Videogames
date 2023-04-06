const validator = (
  { name, description, img, released, rating, genres, platforms },
  errors,
  setErrors
) => {
  const errors1 = {};

  //! valido el NAME
  //?valido que el nombre no este vacio
  if (name.trim().length === 0) {
    errors1.name = "A name is required";
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
    errors1.image = "A link is required";
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
  setErrors({
    ...errors,
    name: errors1.name,
    description: errors1.description,
    img: errors1.image,
    released: errors1.released,
    rating: errors1.rating,
    genres: errors1.genres,
    platforms: errors1.platforms,
  });
};
export default validator;
