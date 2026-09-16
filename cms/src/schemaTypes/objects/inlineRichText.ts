import { defineType, defineArrayMember } from 'sanity'

export const inlineRichText = defineType({
  name: 'inlineRichText',
  title: 'Inline Rich Text',
  type: 'array',
  of: [
    defineArrayMember({
      type: 'block',
      styles: [{ title: 'Normal', value: 'normal' }],
      lists: [],
      marks: {
        decorators: [
          { title: 'Underline', value: 'underline' },
        ],
        annotations: [],
      },
    }),
  ],
  validation: (Rule) =>
    Rule.max(10).custom((blocks) => {
      if (!blocks) return true

      // Extract all text content
      const text = blocks
        .map((block:any) =>
          block._type === 'block'
            ? block.children.map((child:any) => child.text).join('')
            : ''
        )
        .join('')

      const maxChars = 5000
      if (text.length > maxChars) {
        return `Text must be ${maxChars} characters or less (currently ${text.length})`
      }

      return true
    }),
})
