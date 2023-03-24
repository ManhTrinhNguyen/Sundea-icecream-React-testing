import { render, screen } from "@testing-library/react"
import SummaryForm from "../SummaryForm"
import userEvent from "@testing-library/user-event"

test("Initial conditions", () => {
  render(<SummaryForm />)
  const checkbox = screen.getByRole("checkbox", {name: /terms and conditions/i})
  const button = screen.getByRole("button", {name: "Confirm order"})

  expect(checkbox).not.toBeChecked()
  expect(button).toBeDisabled()
})
 
test("Checkbox disables button on first click and enables om second click", async () => {
  const user = userEvent.setup()
  
  render(<SummaryForm />)
  const checkbox = screen.getByRole("checkbox", { name: /terms and conditions/i })
  const button = screen.getByRole("button", { name: "Confirm order" })
  
  await user.click(checkbox) 
  expect(button).toBeEnabled()

  await user.click(checkbox)
  expect(button).toBeDisabled()
})

test("Popover responds to hover", async () => {
  const user = userEvent.setup()
  render(<SummaryForm />)

  // popover starts out hidden 
  const nullPopover = screen.queryByText(/no ice cream will actually be delivered/i)
  expect(nullPopover).not.toBeInTheDocument()

  // popover appears on mouseover of checkbox label
  const tearmsAndConditions = screen.getByText(/terms and conditions/i);
  await user.hover(tearmsAndConditions)
  const popover = screen.getByText(/no ice cream will actually be delivered/i)
  expect(popover).toBeInTheDocument()

  // popover dissapear when we mouse out

  await user.unhover(tearmsAndConditions)
  expect(popover).not.toBeInTheDocument()

})