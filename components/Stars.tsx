"use client"
import Rating from "@mui/material/Rating"
import Stack from "@mui/material/Stack"
function Stars({ rating }: { rating: number }) {
  return (
    <Stack spacing={1}>
      <Rating
        name="half-rating-read "
        defaultValue={Number(rating)}
        precision={0.1}
        readOnly
        className="text-white flex-shrink-0 "
      />
    </Stack>
  )
}

export default Stars
