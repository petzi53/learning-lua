--[[
A leap year (in the Gregorian calendar) occurs:

- In every year that is evenly divisible by 4.
- Unless the year is evenly divisible by 100, in which case its only a leap year if the year is also evenly divisible by 400.

Some examples:

- 1997 was not a leap year as its not divisible by 4.
- 1900 was not a leap year as its not divisible by 400.
- 2000 was a leap year!
]]


local leap_year = function(number)
  if (number % 4 ~= 0) then
    -- print(number .. " not divisble by 4: therefore not a leap year!")
    return false
  elseif (number % 100 == 0) and (not(number % 400 == 0)) then
    -- print(number .. " divisble by 100 but not by 400: therefore not a leap year!")
    return false
  else
    -- print(number  .. " is a leap year")
    return true
  end
end


return leap_year