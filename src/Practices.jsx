export const Practices = () => {
  // return <h1>Interview</h1>
  const students = [];
//   console.log(students.length);
  
  return (
    <>
      {/* <p>{students.length && "Not Avialable"}</p> */}

      {/* 1st */}

      {/* <p>{students.length===0 && "Not Avialable"}</p> */}

      {/* 2nd */}
      {/* <p>{!students.length && "Not Avialable"}</p> */}

      {/* 3rd */}
      <p>{!Boolean(students.length) && "Not students Avialable"}</p>
      <p>Number of students: {students.length}</p>
    </>
  );
};
