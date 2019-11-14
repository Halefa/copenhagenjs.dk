import marked from 'marked'
import Page from '../components/Page'
import { resources } from '../data/learn.js'

let text = `
# Learn JavaScript

We have compiled a list of resources we think will help you learn JavaScript.
`
export default () => {
  return (
    <Page>
      <div dangerouslySetInnerHTML={{ __html: marked(text) }} />
      {resources.map((resource, key) => (
        <div key={key}>
          <h3>
            {key + 1}. {resource.title}
          </h3>
          <p>{resource.desc}</p>
          <p>
            Check out <a href={resource.url}>{resource.title}</a> here.
          </p>
        </div>
      ))}
    </Page>
  )
}
