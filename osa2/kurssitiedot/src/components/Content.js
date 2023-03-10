import Part from './Part'

const Content = ({course}) => {

    return(
      <div>
        {course.map((courseInfo, index) =>
          <Part key={index} name={courseInfo.name} exercises={courseInfo.exercises}  />
        )}
      </div>
    )
  }

  export default Content