class Dragon
  attr_accessor :color, :size, :food , :abilities, :habitat
  def initialize(color,size,food,abilities,habitat)
    @color = color
    @size = size
    @food = food
    @abilities = abilities
    @habitat = habitat
  end

  def feed(offering)
    if @food.any? {|food| food == offering }
      puts "Rumbles with pleasure, you've made a friend!"
    else
      puts "Roars with anger! Run!"
    end
  end
end

snuffles = Dragon.new("red","132ft",["sheep","pig","goose","fox"],"Small bursts of fire","Forested hills")
snuggles = Dragon.new("green","4.3ft",["mice","insects"],"Sense of smell","Undergrowth")
stumbles = Dragon.new("red-brown","15ft",["birds","snakes","squirrels"],"None","Rocky")
shuffles = Dragon.new("blue-green","5.5ft",["plants","insects"],"Very quick","Forest canopy")

snuggles.feed("insects")
shuffles.feed("squirrels")