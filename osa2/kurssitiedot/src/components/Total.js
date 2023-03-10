const Total = ({total}) => {

    let totalAmount = total.reduce((sum, exercise) => sum+exercise.exercises, 0)
  
    return(
      <p><b>Total number of exercises is {totalAmount}</b></p>
    )
  }

  export default Total