class InstructionSerializer
  include JSONAPI::Serializer
  attributes :stepNumber, :content
end
