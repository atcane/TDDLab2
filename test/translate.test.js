describe("translate", function () {
  // tests go in here
  // 1. Multiple tests for words starting with different vowels.

  it("word starting with a", function () {
    expect(translate("apple")).toEqual("appleway");
  });

  it("word starting with e", function () {
    expect(translate("earth")).toEqual("earthway");
  });

  it("word starting with i", function () {
    expect(translate("igloo")).toEqual("iglooway");
  });

  it("word starting with o", function () {
    expect(translate("outside")).toEqual("outsideway");
  });

  it("word starting with u", function () {
    expect(translate("unique")).toEqual("uniqueway");
  });

  // 2. At least one test for words starting with one consonant.

  it("word starting with t", function () {
    expect(translate("tomato")).toEqual("omatotay");
  });

  x// 3. At least one test for words starting with two consonants.

  it("word starting with th", function () {
    expect(translate("thank")).toEqual("ankthay");
  });
  
  // 4. At least one test for words starting with three consonants.

      it("word starting with str", function () {
      expect(translate("strong")).toEqual("ongstray");
    });

  // 5. At least one test checking for lower case conversion.

    it("lower case conversion", function () {
      expect(translate("MONDAY")).toEqual("ondaymay");
    });
});
