export async function pfd(formData) {
  // Process the form data
  console.log("Form Data: ", formData);

  const responseString = `Year: ${formData.year}. School: ${
    formData.school
  }. Majors: ${formData.majors.join(", ")}.`;

  return new Promise((resolve) => {
    setTimeout(() => resolve(responseString), 2000); // Simulate async work, e.g., API call
  });
}
