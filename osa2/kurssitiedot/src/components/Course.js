import Content from './Content'
import Header from './Header'
import Total from './Total'

const Course = ({course}) => {

    return(
      <div>
        {course.map(courseContent =>
          <div key={courseContent.id}>
            <Header header={courseContent.name}/>
            <Content course={courseContent.parts}/>
            <Total total={courseContent.parts} />
          </div>
        )}
      </div>
    )
  }
  
  export default Course