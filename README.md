# Daniel Marcovitch legal website

A compact, responsive one-page profile for Daniel Marcovitch.
a simple easy to use website
acessible at marcovitchlaw.ca

## Page structure

- Short professional profile and portrait
- Criminal defence services and practice areas
- Professional and education credential badges
- Contact form
- Legal disclaimer and footer

The contact form is static: it prepares a message and opens the visitor's email application using `mailto:`. It does not store or transmit form submissions itself.
* I will work on potentially using a a secure form service or backend:
-netlify
-formspree
-google forms
-microsoft 
etc
A private serverless email endpoint for maximum control??

## Run locally

From this directory:

```sh
python3 -m http.server 8000
```

Then open <http://localhost:8000>.

## Placeholders to replace before publishing

1. Replace the `.portrait-placeholder` block in `index.html` with Daniel's portrait. The existing `.portrait-figure > img` styles will provide the monochrome crop.
2. ~Replace the inline SVG inside `.wordmark-symbol` with the supplied legal-symbol artwork.~
3. If submissions should be sent without opening an email application, connect the form to a hosted form provider or server endpoint and replace the handler in `script.js`.
