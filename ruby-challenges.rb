# ASSESSMENT 5: Ruby Coding Practical Questions
# MINASWAN

# QUESTION 1) Create a method that takes in an array of words and a single letter and returns an array of all the words containing that particular letter. Use the test variables provided.

beverages_array = ['coffee', 'tea', 'juice', 'water', 'soda water']

letter_o = 'o'
# Expected output: ['coffee', 'soda water']
# letter_t = 't'
# Expected output: ['tea', 'water', 'soda water']

# PUSEDOCODE
# create a method called letter_checker that will take in an array or a variable
# Use the .select method to filter through the array and return all the true values
# Check to see if the array or variable includes? the value given
# Print letter_checker for the output

def letter_checker array, variable
    array.select do |value|
        if value.include?(variable)
            value 
        end
    end
end


    p letter_checker(beverages_array, letter_o)
        output: ["coffee", "soda water"]



# 2) Create a method that takes in a hash and returns one array with all the hash values at their own index and in alphabetical order. No nested arrays. Use the test variable provided.
# HINT: Google 'ruby get rid of nested arrays'

us_states = { northwest: ['Washington', 'Oregon', 'Idaho'], southwest: ['California', 'Arizona', 'Nevada'], notheast: ['Maine', 'New Hampshire', 'Vermont'] }
# Expected output: ['Arizona', 'California', 'Idaho', 'Maine', 'Nevada', 'New Hampshire', 'Oregon', 'Vermont', 'Washington'] 

# create a method called equal_one that takes in a hash
 # make a variable that utilizies the .flatten method twice to get rid of all nested array brackets
# Use the .sort method to compare the arrays to each other and sort them


def equal_one hash
    hash.values.flatten.sort
    end

p equal_one(us_states)


# QUESTION 3a) Create a class called Bike that is initialized with a model, wheels, and current_speed. The default number of wheels is 2. The current_speed should start at 0. Create a bike_info method that returns a sentence with all the data from the bike object.

# Expected output example: 'The Trek bike has 2 wheels and is going 0 mph.'

# PUSEDOCODE
#  create a class called bike
# Add my shortcut method attr_accessor
# Add the  methods for the bike information
# p sentence will all the sata from the bike object
# Add the ability to pedal faster and brake
#increase the pedal_faster method
# decrease the bike method but not to -negative

# QUESTION 3b) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed by a given amount. The brake method should decrease the speed by a given amount. The bike cannot go negative speeds.

# Expected output example: my_bike.pedal_faster(10) => 10
# Expected output example: my_bike.pedal_faster(18) => 28
# Expected output example: my_bike.brake(5) => 23
# Expected output example: my_bike.brake(25) => 0


class Bike
    attr_accessor :model, :wheels, :current_speed
    def initialize(model)
        @model = model
        @wheels = 2
        @current_speed = 0
    end
    def pedal_faster(number)
        @current_speed += number
    end
    def brake(number)
        if ((@current_speed - number) <= 0)
            @current_speed = 0
        else 
            @current_speed -= number
        end
    end
    def get_info
        p "The #{@model} bike has #{@wheels} wheels and is going #{@current_speed} mph."
    end

end
Trek = Bike.new('Trek')
Trek.get_info
    # =>"The Trek bike has 2 wheels and is going 0 mph."
Trek.pedal_faster(10)
    # =>"The Trek bike has 2 wheels and is going 10 mph."
Trek.pedal_faster(18)
    # =>"The Trek bike has 2 wheels and is going 28 mph."
Trek.brake(5)
    # =>"The Trek bike has 2 wheels and is going 23 mph."
Trek.brake(25)
    =>"The Trek bike has 2 wheels and is going 0 mph."
Trek.pedal_faster(18)
    had to make sure it went back up again:)
    =>"The Trek bike has 2 wheels and is going 18 mph."
Trek.get_info


