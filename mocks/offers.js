const AVATAR_URL = `https://api.adorable.io/avatars/128`;

export default [
  {
    features: {
      type: `apartment`,
      badrooms: 2,
      adults: 4,
    },
    premium: false,
    price: 100,
    titie: `Wood and stone place`,
    rating: 3.5,
    things: [`Coffee machine`, `Dishwasher`, `Baby seat`, `Cabel TV`],
    pictures: [{
      src: `http://placeimg.com/260/200/arch`,
      description: `place description`,
    }, {
      src: `http://placeimg.com/260/200/arch`,
      description: `place description`,
    }],
    description: `The concept, therefore, unbiased generates and provides a complex world.
    Liberation, by definition, transposes Taoism. Predicate calculus, as follows from the above,
    deduces hedonism, without taking into account the opinions of authorities.`,
    owner: {
      name: `John Snow`,
      super: false,
      picture: `${AVATAR_URL}/${Math.random()}`,
    }
  }, {
    features: {
      type: `house`,
      badrooms: 4,
      adults: 6,
    },
    premium: true,
    price: 10,
    titie: `Canal View Prinsengracht`,
    rating: 1.3,
    things: [`Heating`, `Kitchen`, `Fridge`, `Coffee machine`, `Dishwasher`, `Baby seat`, `Cabel TV`],
    pictures: [{
      src: `http://placeimg.com/260/200/arch`,
      description: `place description`,
    }, {
      src: `http://placeimg.com/260/200/arch`,
      description: `place description`,
    }, {
      src: `http://placeimg.com/260/200/arch`,
      description: `place description`,
    }, {
      src: `http://placeimg.com/260/200/arch`,
      description: `place description`,
    }, {
      src: `http://placeimg.com/260/200/arch`,
      description: `place description`,
    }],
    description: `The concept, therefore, unbiased generates and provides a complex world.
    Liberation, by definition, transposes Taoism. Predicate calculus, as follows from the above,
    deduces hedonism, without taking into account the opinions of authorities.`,
    owner: {
      name: `Bob James`,
      super: true,
      picture: `${AVATAR_URL}/${Math.random()}`,
    }
  }, {
    features: {
      type: `hotel`,
      badrooms: 2,
      adults: 4,
    },
    premium: false,
    price: 200,
    rating: 4.8,
    titie: `Beautiful & luxurious studio at great location`,
    things: [`Wi-Fi`, `Washing machine`, `Towels`, `Heating`, `Dishwasher`, `Baby seat`, `Cabel TV`],
    pictures: [{
      src: `http://placeimg.com/260/200/arch`,
      description: `place description`,
    }, {
      src: `http://placeimg.com/260/200/arch`,
      description: `place description`,
    }, {
      src: `http://placeimg.com/260/200/arch`,
      description: `place description`,
    }, {
      src: `http://placeimg.com/260/200/arch`,
      description: `place description`,
    }],
    description: `The delusion emphasizes intelligent common sense, although the opposite is accepted in the official language.
    The world takes into account the gravitational paradox, although the opposite is accepted in officialdom.
    The axiom of syllogism contributes to ontological hedonism`,
    owner: {
      name: `Agent 007`,
      super: false,
      picture: `${AVATAR_URL}/${Math.random()}`,
    }
  }, {
    features: {
      type: `room`,
      badrooms: 1,
      adults: 2,
    },
    premium: true,
    price: 80,
    titie: `Canal View Prinsengracht`,
    rating: 2.9,
    things: [`Wi-Fi`, `Washing machine`, `Towels`, `Heating`, `Kitchen`, `Fridge`, `Coffee machine`, `Dishwasher`, `Baby seat`, `Cabel TV`],
    pictures: [{
      src: `http://placeimg.com/260/200/arch`,
      description: `place description`,
    }, {
      src: `http://placeimg.com/260/200/arch`,
      description: `place description`,
    }, {
      src: `http://placeimg.com/260/200/arch`,
      description: `place description`,
    },
    {
      src: `http://placeimg.com/260/200/arch`,
      description: `place description`,
    }, {
      src: `http://placeimg.com/260/200/arch`,
      description: `place description`,
    }, {
      src: `http://placeimg.com/260/200/arch`,
      description: `place description`,
    }, {
      src: `http://placeimg.com/260/200/arch`,
      description: `place description`,
    }],
    description: `The concept, therefore, unbiased generates and provides a complex world.
    Liberation, by definition, transposes Taoism. Predicate calculus, as follows from the above,
    deduces hedonism, without taking into account the opinions of authorities.`,
    owner: {
      name: `Many Pany`,
      super: true,
      picture: `${AVATAR_URL}/${Math.random()}`,
    }
  }
];
