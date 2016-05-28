''' A short Ruby script to generate random words 
    by Michael Stewart.
    I wrote this for another website, but figured I could use it here. '''

def gen_words(words_array, num_paragraphs, paragraph_length)

	str = ""
	total_words = words_array.length
	capitalize_next = true
	words_array_simple = ["the", "and", "when", "what", "where", "why", "how", "who"]
	total_simple_words = words_array_simple.length

	for j in 1..num_paragraphs
		str << "<p>"
		for i in 1..paragraph_length

			''' Pick "the", "and", "when", "what", "where", "why", "how", and "who" more often '''

			word_simple = rand(1..7)
			if word_simple == 1
				word = words_array_simple[rand(total_simple_words)]
			else
				word = words_array[rand(total_words)]
			end



			if capitalize_next == true
			 	word.capitalize!
			 	capitalize_next = false
			end

			str << word

			if i != paragraph_length
				comma = rand(1..8)
				if comma == 1
					str << ","
				else
					full_stop = rand(1..13)
					if full_stop == 1
						other_punctuation_mark = rand(1..4)
						if other_punctuation_mark == 1
							question_mark = rand(1..2)
							if question_mark == 1
								str << "?"
							else
								str << "!"
							end
						else
							str << "."
						end
						capitalize_next = true
					end
				end
				str << " "
			else
				str << "."
			end
		end
		if num_paragraphs > 1# and j < num_paragraphs
			str << "</p>\n"
		end
		capitalize_next = true
	end

	return str

end


def random_words(type)
	file = File.open("words.txt", "r")
	words_array = Array.new
	str = ""
	counter = 0

	while (line = file.gets)
		counter += 1
		if !(line.chomp.length < 3 and counter > 50)
    	words_array << line.chomp
    end
	end

	if type == 'title'
		str = gen_words(words_array, 1, rand(2..4))
	elsif type == 'content'
		str = gen_words(words_array, rand(2..5), rand(90..130))
	else
		return "Hello. I tried to generate a message but the type of message wasn't specified properly."
	end

	return str

end

puts random_words("content")