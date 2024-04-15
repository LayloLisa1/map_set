const removeEntry = (obj, itemName) => {
    delete obj[itemName];
    return obj;
  };
  console.log(removeEntry({ piano: 300, tv: 100, skate: 50 }, "skate"));
  console.log(removeEntry({ mirror: 500, painting: 1 }, "mirror"));
  