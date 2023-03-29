import { render, screen } from "@testing-library/react"

import Options from "../Options"

test('Displays image for each scoop option from server', async () => { 
  render(<Options optionType="scoops" />)

  // find images

  const scoopImages = await screen.findAllByRole("img", { name: /scoop$/i })
 
  expect(scoopImages).toHaveLength(2)

  // confirm alt text of images
  const altText = scoopImages.map(element => element.alt)
  expect(altText).toEqual(["Chocolate scoop", "Vanilla scoop"])
})

//Find Toppings IMG

test("Display images of Toppings option from server", async () => {
  render(<Options optionType="toppings" />)
   // find imgages 
  const toppingsImage = await screen.findAllByRole("img", { name: /topping$/i })
  expect(toppingsImage).toHaveLength(3)

  // confirm alt text of images 
  const altText = toppingsImage.map(element => element.alt)
  expect(altText).toEqual(["Cherries topping", "M&Ms topping", "Hot fudge topping"])
 })