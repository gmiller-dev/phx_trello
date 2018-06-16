import React from 'react'

export const setDocumentTitle = (title) => {
  document.getElementsByTagName('title')[0].innerText = title
}
export const renderErrorsFor = (errors, ref) =>
errors
? errors.map(
    (error, i) =>
      error[ref]
      ? <div key={i} className='error'> {error[ref]} </div>
      : null
  ).filter((x) => !!x)
: null

const checkStatus = (response) => {
  if (response.status >= 200 && response.status < 300) {
    return response
  } else {
    const error = Object.assign(new Error(response.statusText), { response })
    throw error
  }
}

const parseJSON = (response) => response.json()

export const httpPost = (url, data) => window.fetch(url, {
  method: 'POST',
  body: JSON.stringify(data),
  headers: {
    'content-type': 'application/json'
  }
})
.then(checkStatus)
.then(parseJSON)
