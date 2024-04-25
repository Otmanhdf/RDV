export const donation = {
  blood: {
    before: [
      {
        name: "",
        icon: "book-information-variant",
        size: 100,
        description: " Preparing to give blood ",
      },
    ],

    after: [
      {
        name: "",
        icon: "book-information-variant",
        description: "After donating",
      },
    ],
    Typ: [
      {
        name: "",
        icon: "book-information-variant",
        description: "About different blood types",
      },
    ],
  },
};

export const after = donation.blood.after.map((item) => item);
export const Typ = donation.blood.Typ.map((item) => item);

export const before = donation.blood.before.map((item) => item);
