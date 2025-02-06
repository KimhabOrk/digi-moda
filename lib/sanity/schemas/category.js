export default {
  name: "category",
  title: "Category",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string"
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96
      },
      validation: Rule => Rule.required()
    },
    {
      name: "color",
      title: "Color",
      type: "string",
      description: "Color of the category",
      options: {
        list: [
          { title: "Red", value: "red" },
          { title: "Cyan", value: "cyan" },
          { title: "Pink", value: "pink" },
          { title: "Yellow", value: "yellow" },
          { title: "Green", value: "green" },
          { title: "Blue", value: "blue" },
          { title: "Purple", value: "purple" },
          { title: "Orange", value: "orange" }
        ]
      }
    },
    {
      name: "description",
      title: "Description",
      type: "text"
    }
  ]
};
