import vine from '@vinejs/vine'

export const contactValidator = vine.compile(
  vine.object({
    firstName: vine.string().trim(),
    lastName: vine.string().trim(),
    email: vine.string().email(),
    content: vine.string().trim(),
  })
)
